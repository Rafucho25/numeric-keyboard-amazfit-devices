import { keyboard } from '../utils/keyboard'

Page({
  build() {
     
    const _keyboard = new keyboard()
    
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 5,
      y: 250,
      w: 184,
      h: 50,
      radius: 12,
      normal_color: 0x0986D4,
      press_color: 0x3CA4CE,
      text: 'Presioname',
      text_size: 20,
      click_func: (button_widget) => {
        hmUI.showToast({
          text: _keyboard.text_value 
        })
      }
    })
  }
})
