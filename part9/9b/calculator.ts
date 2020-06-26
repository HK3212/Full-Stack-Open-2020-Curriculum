type Operation = 'multiply' | 'add' | 'divide';
type Result = string | number;

export const calculator = (a: number, b: number, op: Operation): Result => {
  switch (op) {
    case 'multiply':
      return a * b;
    case 'add':
      return a + b;
    case 'divide':
      if (b === 0) throw new Error("can't divide by 0!");
      return a / b;
    default:
      throw new Error('Operation is not multiply add or devide');
  }
};

try {
  console.log(calculator(5, 5, 'multiply'));
} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
}
