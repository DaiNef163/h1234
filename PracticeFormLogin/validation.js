function Validation(options) {
    var formElement = document.querySelector(options.form);
    if (formElement) {
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var errorElement = inputElement.parentElement.querySelector(".form-message");
        if (inputElement) {
          inputElement.addEventListener("blur", function () {
            var errorMessage = rule.test(inputElement.value);
            if (errorMessage) {
              errorElement.innerText = errorMessage;
              inputElement.parentElement.classList.add("invalid");
            } else {
              errorElement.innerText = "";
              inputElement.parentElement.classList.remove("invalid");
            }
          });
        }
      });
    }
  }
  
  Validation.isName = function (selector) {
    return {
      selector: selector,
      test: function (value) {
        return value.trim() ? undefined : "Vui lòng nhập trường này";
      }
    };
  };
  
  Validation.isEmail = function (selector) {
    return {
      selector: selector,
      test: function (value) {
        return value.trim() ? undefined : "Vui lòng nhập trường này";
      }
    };
  };
  
  Validation.isPassword = function (selector) {
    return {
      selector: selector,
      test: function (value) {
        return value.trim() ? undefined : "Vui lòng nhập mật khẩu";
      }
    };
  };
  