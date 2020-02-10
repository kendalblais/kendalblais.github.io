document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#calculator',
        data() {
            return {
                log: "",
                value: "0",
                previousAns: ""
            };
        },
        methods: {
            append(character) {
                if(this.value === "0"){
                    this.value = "";
                }

                if(character === "Ans"){
                    this.value += this.previousAns;
                } else {
                    this.value += character;
                }
                
            },
            clearEntry() {
                if(this.value.length === 1){
                    this.value = 0;
                } else {
                    this.value = this.value.slice(0, this.value.length - 1);
                }
            },
            clearAll() {
                this.value = "0";
                this.log = "";
                this.previousAns = "";
            },
            calculate() {
                this.log = this.value;

                try {
                    this.previousAns = eval(this.value);
                    this.value = this.previousAns;

                    // change the color back to grey in case the previous calculation resulted in an error
                    document.getElementById("log").style.color = "grey";
                }
                catch(err) {
                    this.log = err.message;

                    // change the color to red for the log to display the text
                    document.getElementById("log").style.color = "red";
                }
                

            }
        }

    })
})