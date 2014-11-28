(function(){ 
    var flags = ['ag','ai','ar','be','bl','bs','ge','gl','gr','ju','lu','ne','nw','ow','sg','sh','so','sz','tg','ti','ur','vd','vs','zg','zh'];

    var numberInputBigPlate = document.getElementById('plaqueBigNb');
    var numberInputLargePlate = document.getElementById('plaqueLgNb');
    var ctnSelectorLg = document.getElementById('ctnSelectLg');
    var ctnSelectorBig = document.getElementById('ctnSelectBig');


    function fillCantonSelector(){
        var selects = document.getElementsByClassName('canton-choices');
        for(var j=0;j<selects.length;j++){
            for(var k=0;k<flags.length;k++){
                var option = document.createElement('option');
                option.value = flags[k];
                option.innerHTML = flags[k];
                selects[j].appendChild(option);
            }
        }
    }

    var changeFlag = function(selectedFlag){
        var imgCtn = document.getElementsByClassName('ctn-flag');
        for (var i = imgCtn.length - 1; i >= 0; i--) {
            imgCtn[i].src = "pictos/" + selectedFlag + '.png';
        }
    };
    var updateNumberInputs = function(number){
        numberInputLargePlate.value = number;
        numberInputBigPlate.value = number;
        setInputSizeByContentsLength();
    };
    var updateCantonSelects = function(canton){
        ctnSelectorLg.value = canton;
        ctnSelectorBig.value = canton;
    };


    var inputFuncListener = function(){
        var val = this.value;
        plaque.setNumber(val);
    };

    var ctnSelectListener = function(){
        var selectedCanton = this.options[this.selectedIndex].value;
        plaque.setCanton(selectedCanton);
    };

    var setInputSizeByContentsLength = function(){
        numberInputLargePlate.style.width = ((numberInputLargePlate.value.length + 1) * 23) + 'px';
    };


    var Immatriculation = function(newCanton,newNumber){
        var number = '';
        var canton = '';
        var setThousands = function (value){
            value = value.split(' ').join('');
            if(value.length > 5){
                var charArray = value.split('');
                for (var i = charArray.length - 1; i >= 0; i--) {
                    if(i%3 === 0){
                        charArray[i] = ' ' + charArray[i];
                    }
                }
                value = charArray.join('').trim();
            }
            return value;
        };
        this.getCanton = function(){
            return canton;
        };
        this.setCanton = function(ctn){
            canton = ctn;
            changeFlag(ctn);
            updateCantonSelects(ctn);
        };
        this.getNumber = function(){
            return number;
        };
        this.setNumber = function(nb){
            nb = setThousands(nb);
            number = nb;
            updateNumberInputs(nb);
        };

        this.setCanton(newCanton);
        this.setNumber((newNumber).toString());
    };


    numberInputBigPlate.addEventListener('keyup', inputFuncListener, false);
    numberInputLargePlate.addEventListener('keyup', inputFuncListener, false);
    ctnSelectorLg.addEventListener('change', ctnSelectListener, false);
    ctnSelectorBig.addEventListener('change', ctnSelectListener, false);

    fillCantonSelector();
    var plaque = new Immatriculation('vs',67500);

})();