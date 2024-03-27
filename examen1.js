
function tipoFigura(lado,largo){
    
        if(lado<0){
            return ("cantidad de lados inválida");
        }
        else{
            switch(lado){
                case 0:
                    let circunferencia=2*Math.PI*largo;
                    return ("circulo y su perimetro es "+circunferencia);
                    break;
                case 3:
                    let triangulo=largo*3
                    return ("triangulo y su area es "+triangulo);
                    break;
                case 4:
                    let cuadrado=largo*4
                    return  ("cuadrado y su perimetro es "+cuadrado);
                    break;
                case 5:
                    let pentagono=largo*5
                    return  ("pentagono y su perimetro es "+pentagono);
                    break;
                case 6:
                    let hexagono=largo*6
                    return ("hexagono y su perimetro es "+hexagono);
                        break;
                case lado:
                    let poligono=largo*lado
                    return  ("poligono y su perimetro es "+poligono);
                    break;
                default:
                    return ("no existe")
                break;
    }    
            }
            
        }
        
console.log(tipoFigura(3,10))
console.log(tipoFigura(6,10))
console.log(tipoFigura(5,10))
console.log(tipoFigura(8,10))
console.log(tipoFigura(1,10))