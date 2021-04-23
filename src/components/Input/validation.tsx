class Validation {
  public constructor(
    private input: HTMLInputElement,
    private condition: RegExp,
  ) {
    this.input = input;
    this.condition = condition;
  }

  protected getValue(): string {
    return this.input.value;
  }

  public isValid(): boolean {
    return this.condition.test(this.getValue());
  }
}

export function isValidCompany(): boolean {
  const company: Validation = new Validation(
    document.getElementById('company') as HTMLInputElement,
    /^[a-zA-Z ]{1,}$/,
  );

  return company.isValid();
}

export function isValidEmail(): boolean {
  const email: Validation = new Validation(
    document.getElementById('email') as HTMLInputElement,
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi,
    // \A[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\z
  );

  return email.isValid();
}

export function isValidPassword(): boolean {
  const password: Validation = new Validation(
    document.getElementById('password') as HTMLInputElement,
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  );

  return password.isValid();
}

export function isValidConfirmPassword(): boolean {
  const password = document.getElementById('password') as HTMLInputElement;
  const confirmPassword = document.getElementById(
    'confirmPassword',
  ) as HTMLInputElement;

  return isValidPassword() && confirmPassword.value === password.value;
}
