let textarea = document.querySelector('.textarea');
let caseDown = document.querySelectorAll('.caseDown');
let caps = document.querySelectorAll('.caps');
let shift = document.querySelectorAll('.shift');
let rus = document.querySelectorAll('.rus');
let eng = document.querySelectorAll('.eng');
let keys = document.querySelectorAll('.key');
let shiftIndex = 0;
let altIndex = 0;
let capsIndex = 0;
let cursorPosition = 0;
let zxc=0;

//клава
textarea.onblur = function () {
    textarea.focus();
}

function qqq(item) {
    item.classList.remove('active');
}

window.addEventListener('keydown', function (e) {
    keys.forEach(item => {
        if (item.classList.contains(e.code)) {
            write(item);
            item.classList.add('active');
            this.addEventListener('keyup', function () {
                setTimeout(qqq, 80, item);
            })
        }
    })
});

function language() {
    rus.forEach(item => {
        if (!item.classList.contains('hidden')) item.classList.add('hidden');
        else item.classList.remove('hidden');
    });
    eng.forEach(item => {
        if (!item.classList.contains('hidden')) item.classList.add('hidden');
        else item.classList.remove('hidden');
    });
}

function write(n) {

    
    if (n.classList.contains('CapsLock')){
        if (zxc==0){
        if (capsIndex == 0){
            caseDown.forEach(item => {
                item.classList.add('hidden');
            });
            caps.forEach(item => {
                item.classList.remove('hidden');
            });
            capsIndex = 1;
        } else {
            caseDown.forEach(item => {
                item.classList.remove('hidden');
            });
            caps.forEach(item => {
                item.classList.add('hidden');
            });
            capsIndex = 0;
        }
        zxc = 1;
        if ((zxc == 1) && (shiftIndex == 1)){
            console.log('a')
        }
            this.addEventListener('keyup', function () {
                zxc = 0;

        })
    }
}


    if (n.classList.contains('ShiftLeft') || n.classList.contains('ShiftRight')) {
        caseDown.forEach(item => {
            item.classList.add('hidden');
        });
        shift.forEach(item => {
            item.classList.remove('hidden');
        });

        this.addEventListener('keyup', function () {
            caseDown.forEach(item => {
                item.classList.remove('hidden');
            });
            shift.forEach(item => {
                item.classList.add('hidden');
            });
        })
    }

    if (n.classList.contains('AltLeft')) {
        altIndex = 1;
        if (altIndex == shiftIndex) language();
        this.addEventListener('keyup', function () {
            altIndex = 0;
        })
    }

    if (n.classList.contains('ShiftLeft') || n.classList.contains('ShiftRight')) {
        shiftIndex = 1;
        if (altIndex == shiftIndex) language();
        this.addEventListener('keyup', function () {
            shiftIndex = 0;
        })
    }
}


//мышь
keys.forEach(item => {
    item.addEventListener('mousedown', function () {
        if (this.classList.contains('control')) {
            if (this.classList.contains('Tab')) {
                cursorPosition = textarea.selectionStart + 3;
                textarea.value = textarea.value.slice(0, textarea.selectionStart) + '   ' + textarea.value.slice(textarea.selectionStart);
                textarea.setSelectionRange(cursorPosition, cursorPosition);
            }
            if (this.classList.contains('Space')) {
                cursorPosition = textarea.selectionStart + 1;
                textarea.value = textarea.value.slice(0, textarea.selectionStart) + ' ' + textarea.value.slice(textarea.selectionStart);
                textarea.setSelectionRange(cursorPosition, cursorPosition);
            }
            if (this.classList.contains('Backspace')) {
                cursorPosition = textarea.selectionStart - 1;
                textarea.value = textarea.value.slice(0, textarea.selectionStart - 1) + textarea.value.slice(textarea.selectionStart);
                textarea.setSelectionRange(cursorPosition, cursorPosition);
            }
            if (this.classList.contains('Delete')) {
                cursorPosition = textarea.selectionStart;
                textarea.value = textarea.value.slice(0, textarea.selectionStart) + textarea.value.slice(textarea.selectionStart + 1);
                textarea.setSelectionRange(cursorPosition, cursorPosition);
            }

            if (this.classList.contains('CapsLock')) {
                caseDown.forEach(item => {
                    if (!item.classList.contains('hidden')) item.classList.add('hidden');
                    else item.classList.remove('hidden');
                });
                caps.forEach(item => {
                    if (!item.classList.contains('hidden')) item.classList.add('hidden');
                    else item.classList.remove('hidden');
                });
            }

            if (this.classList.contains('ShiftLeft') || this.classList.contains('ShiftRight')) {
                caseDown.forEach(item => {
                    item.classList.add('hidden');
                });
                shift.forEach(item => {
                    item.classList.remove('hidden');
                });
            }

            if (this.classList.contains('ShiftLeft') || this.classList.contains('ShiftRight')) {
                item.addEventListener('mouseup', function () {
                    caseDown.forEach(item => {
                        item.classList.remove('hidden');
                    });
                    shift.forEach(item => {
                        item.classList.add('hidden');
                    });
                })
            }
        }

        if (!this.classList.contains('control')) {
            if (!this.children[0].classList.contains('hidden')) {
                if (!this.children[0].children[0].classList.contains('hidden')) {
                    cursorPosition = textarea.selectionStart + 1;
                    textarea.value = textarea.value.slice(0, textarea.selectionStart) + this.children[0].children[0].innerHTML + textarea.value.slice(textarea.selectionStart);
                    textarea.setSelectionRange(cursorPosition, cursorPosition);
                }
                if (!this.children[0].children[1].classList.contains('hidden')) {
                    cursorPosition = textarea.selectionStart + 1;
                    textarea.value = textarea.value.slice(0, textarea.selectionStart) + this.children[0].children[1].innerHTML + textarea.value.slice(textarea.selectionStart);
                    textarea.setSelectionRange(cursorPosition, cursorPosition);
                }
                if (!this.children[0].children[2].classList.contains('hidden')) {
                    cursorPosition = textarea.selectionStart + 1;
                    textarea.value = textarea.value.slice(0, textarea.selectionStart) + this.children[0].children[2].innerHTML + textarea.value.slice(textarea.selectionStart);
                    textarea.setSelectionRange(cursorPosition, cursorPosition);
                }
            } else {
                if (!this.children[1].children[0].classList.contains('hidden')) {
                    cursorPosition = textarea.selectionStart + 1;
                    textarea.value = textarea.value.slice(0, textarea.selectionStart) + this.children[1].children[0].innerHTML + textarea.value.slice(textarea.selectionStart);
                    textarea.setSelectionRange(cursorPosition, cursorPosition);
                }
                if (!this.children[1].children[1].classList.contains('hidden')) {
                    cursorPosition = textarea.selectionStart + 1;
                    textarea.value = textarea.value.slice(0, textarea.selectionStart) + this.children[1].children[1].innerHTML + textarea.value.slice(textarea.selectionStart);
                    textarea.setSelectionRange(cursorPosition, cursorPosition);
                }
                if (!this.children[1].children[2].classList.contains('hidden')) {
                    cursorPosition = textarea.selectionStart + 1;
                    textarea.value = textarea.value.slice(0, textarea.selectionStart) + this.children[1].children[2].innerHTML + textarea.value.slice(textarea.selectionStart);
                    textarea.setSelectionRange(cursorPosition, cursorPosition);
                }
            }
        }
    })
})