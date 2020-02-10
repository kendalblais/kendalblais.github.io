document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#calculator',
        // define data - initial display text
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
                    document.getElementById("log").style.color = "grey";
                }
                catch(err) {
                    this.log = err.message;
                    document.getElementById("log").style.color = "red";
                }
                

            }
        }

    })
})