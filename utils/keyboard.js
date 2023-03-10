export class keyboard_band7
{
    constructor(_y = 40){
        this.text_value = ''
        this.start_y = _y

        const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE)

        function click() {
            vibrate.stop()
            vibrate.scene = 24
            vibrate.start()
        }
         
        hmUI.createWidget(hmUI.widget.STROKE_RECT, {
            x: 1,
            y: this.start_y,
            w: 191,
            h: 36,
            radius: 5,
            color: 0xffffff
        })

        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            radius: 30,
            text: 6,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('6', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            radius: 30,
            text: 7,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('7', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            radius: 30,
            text: 8,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('8', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 60,
            w: 45,
            h: 45,
            radius: 30,
            text: 9,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('9', text_input);
            }
        })
         
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            radius: 30,
            text: 2,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('2', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            radius: 30,
            text: 3,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('3', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            radius: 30,
            text: 4,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('4', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 108,
            w: 45,
            h: 45,
            radius: 30,
            text: 5,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('5', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 2,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            radius: 30,
            text: 0,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('0', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 50,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            radius: 30,
            text: 1,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('1', text_input);
            }
        })
         
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 98,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            radius: 30,
            text: '.',
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('.', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 146,
            y: this.start_y + 156,
            w: 45,
            h: 45,
            radius: 30,
            text: "C",
            text_size: 30,
            normal_color: 0x333333,
            press_color: 0xAD3C23,
            click_func: () => {
                click();
                this.removeCharacter(text_input);
            }
        })

        const text_input = hmUI.createWidget(hmUI.widget.TEXT, {
            x: 3,
            y: this.start_y - 2,
            w: 191,
            h: 35,
            text_size: 24,
            color: 0xffffff
        })
    }

    //events
    addCharacter(_value, text_input){
        this.text_value += _value;

        if(this.validation()){
            text_input.setProperty(hmUI.prop.MORE, {
                text: this.text_value,
            })
        }
    }

    removeCharacter(text_input){
        this.text_value = this.text_value.slice(0, -1);

        text_input.setProperty(hmUI.prop.MORE, {
            text: this.text_value,
        })
    }

    validation(){
        //point
        var count = [...this.text_value].filter(x => x === '.').length;

        if(count == 2){
            this.text_value = this.text_value.slice(0, -1);
            return false
        }else{
            return true
        }
    }
}

export class keyboard_gts3_4
{
    constructor(_y = 70){
        this.text_value = ''
        this.start_y = _y

        const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE)

        function click() {
            vibrate.stop()
            vibrate.scene = 24
            vibrate.start()
        }
         
        hmUI.createWidget(hmUI.widget.STROKE_RECT, {
            x: 1,
            y: this.start_y,
            w: 385,
            h: 36,
            radius: 5,
            color: 0xffffff
        })

        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 1,
            y: this.start_y + 50,
            w: 92,
            h: 45,
            radius: 5,
            text: 6,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('6', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 99,
            y: this.start_y + 50,
            w: 92,
            h: 45,
            radius: 5,
            text: 7,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('7', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 197,
            y: this.start_y + 50,
            w: 92,
            h: 45,
            radius: 5,
            text: 8,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('8', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 295,
            y: this.start_y + 50,
            w: 92,
            h: 45,
            radius: 5,
            text: 9,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('9', text_input);
            }
        })
         
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 1,
            y: this.start_y + 100,
            w: 92,
            h: 45,
            radius: 5,
            text: 2,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('2', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 99,
            y: this.start_y + 100,
            w: 92,
            h: 45,
            radius: 5,
            text: 3,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('3', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 197,
            y: this.start_y + 100,
            w: 92,
            h: 45,
            radius: 5,
            text: 4,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('4', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 295,
            y: this.start_y + 100,
            w: 92,
            h: 45,
            radius: 5,
            text: 5,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('5', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 1,
            y: this.start_y + 150,
            w: 92,
            h: 45,
            radius: 5,
            text: 0,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('0', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 99,
            y: this.start_y + 150,
            w: 92,
            h: 45,
            radius: 5,
            text: 1,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('1', text_input);
            }
        })
         
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 197,
            y: this.start_y + 150,
            w: 92,
            h: 45,
            radius: 5,
            text: '.',
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('.', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 295,
            y: this.start_y + 150,
            w: 92,
            h: 45,
            radius: 5,
            text: "C",
            text_size: 30,
            normal_color: 0x333333,
            press_color: 0xAD3C23,
            click_func: () => {
                click();
                this.removeCharacter(text_input);
            }
        })

        const text_input = hmUI.createWidget(hmUI.widget.TEXT, {
            x: 3,
            y: this.start_y - 2,
            w: 376,
            h: 35,
            text_size: 24,
            color: 0xffffff
        })
    }

    //events
    addCharacter(_value, text_input){
        this.text_value += _value;

        if(this.validation()){
            text_input.setProperty(hmUI.prop.MORE, {
                text: this.text_value,
            })
        }
    }

    removeCharacter(text_input){
        this.text_value = this.text_value.slice(0, -1);

        text_input.setProperty(hmUI.prop.MORE, {
            text: this.text_value,
        })
    }

    validation(){
        //point
        var count = [...this.text_value].filter(x => x === '.').length;

        if(count == 2){
            this.text_value = this.text_value.slice(0, -1);
            return false
        }else{
            return true
        }
    }
}

export class keyboard_gts4_mini
{
    constructor(_y = 50){
        this.text_value = ''
        this.start_y = _y

        const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE)

        function click() {
            vibrate.stop()
            vibrate.scene = 24
            vibrate.start()
        }
         
        hmUI.createWidget(hmUI.widget.STROKE_RECT, {
            x: 1,
            y: this.start_y,
            w: 335,
            h: 36,
            radius: 5,
            color: 0xffffff
        })

        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 1,
            y: this.start_y + 50,
            w: 78,
            h: 45,
            radius: 5,
            text: 6,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('6', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 86,
            y: this.start_y + 50,
            w: 78,
            h: 45,
            radius: 5,
            text: 7,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('7', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 171,
            y: this.start_y + 50,
            w: 78,
            h: 45,
            radius: 5,
            text: 8,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('8', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 256,
            y: this.start_y + 50,
            w: 78,
            h: 45,
            radius: 5,
            text: 9,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('9', text_input);
            }
        })
         
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 1,
            y: this.start_y + 100,
            w: 78,
            h: 45,
            radius: 5,
            text: 2,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('2', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 86,
            y: this.start_y + 100,
            w: 78,
            h: 45,
            radius: 5,
            text: 3,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('3', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 171,
            y: this.start_y + 100,
            w: 78,
            h: 45,
            radius: 5,
            text: 4,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('4', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 256,
            y: this.start_y + 100,
            w: 78,
            h: 45,
            radius: 5,
            text: 5,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('5', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 1,
            y: this.start_y + 150,
            w: 78,
            h: 45,
            radius: 5,
            text: 0,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('0', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 86,
            y: this.start_y + 150,
            w: 78,
            h: 45,
            radius: 5,
            text: 1,
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('1', text_input);
            }
        })
         
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 171,
            y: this.start_y + 150,
            w: 78,
            h: 45,
            radius: 5,
            text: '.',
            text_size: 31,
            normal_color: 0x333333,
            press_color: 0x0986D4,
            click_func: () => {
                click();
                this.addCharacter('.', text_input);
            }
        })
        
        hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 256,
            y: this.start_y + 150,
            w: 78,
            h: 45,
            radius: 5,
            text: "C",
            text_size: 30,
            normal_color: 0x333333,
            press_color: 0xAD3C23,
            click_func: () => {
                click();
                this.removeCharacter(text_input);
            }
        })

        const text_input = hmUI.createWidget(hmUI.widget.TEXT, {
            x: 3,
            y: this.start_y - 2,
            w: 335,
            h: 35,
            text_size: 24,
            color: 0xffffff
        })
    }

    //events
    addCharacter(_value, text_input){
        this.text_value += _value;

        if(this.validation()){
            text_input.setProperty(hmUI.prop.MORE, {
                text: this.text_value,
            })
        }
    }

    removeCharacter(text_input){
        this.text_value = this.text_value.slice(0, -1);

        text_input.setProperty(hmUI.prop.MORE, {
            text: this.text_value,
        })
    }

    validation(){
        //point
        var count = [...this.text_value].filter(x => x === '.').length;

        if(count == 2){
            this.text_value = this.text_value.slice(0, -1);
            return false
        }else{
            return true
        }
    }
}