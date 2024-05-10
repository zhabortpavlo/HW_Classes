class SuperMath {
    constructor() {}
  
    
    check(obj) {
      const { X, Y } = obj;
      let znak;
  
      do {
        znak = prompt('Введіть операцію (+ - / * %):');
      } while (!this.isValidOperator(znak));
  
      const confirmMessage = `Ви хочете виконати дію ${znak} з числами ${X} та ${Y}? (Так/Ні)`;
  
      
      if (confirm(confirmMessage)) {
        const result = this.calculate(X, Y, znak);
        alert(`Результат: ${result}`);
      } else {
        this.input();
      }
    }
  
   
    isValidOperator(znak) {
      const validOperators = ['+', '-', '/', '*', '%'];
      return validOperators.includes(znak);
    }
  
  
    input() {
      const X = parseFloat(prompt('Введіть перше число:'));
      const Y = parseFloat(prompt('Введіть друге число:'));
  
      this.check({ X, Y });
    }
  
  
    calculate(X, Y, znak) {
      switch (znak) {
        case '+':
          return X + Y;
        case '-':
          return X - Y;
        case '/':
          return X / Y;
        case '*':
          return X * Y;
        case '%':
          return X % Y;
        default:
          return 'Некоректна операція';
      }
    }
  }
  
  const math = new SuperMath();
  math.input();
  