Page({
    data: {
      targetString: 'བཀྲ་ཤིས་བདེ་ལེགས', // 示例藏文字符串
      userInput: '',
      resultMessage: ''
    },
  
    // 用户输入时触发
    onInput: function(event) {
      this.setData({
        userInput: event.detail.value
      });
    },
  
    // 提交答案并进行验证
    submitAnswer: function() {
      const { targetString, userInput } = this.data;
      
      if (userInput.trim() === targetString) {
        this.setData({
          resultMessage: '输入正确！'
        });
      } else {
        this.setData({
          resultMessage: '输入错误，请再试一次。'
        });
      }
    }
  });
  