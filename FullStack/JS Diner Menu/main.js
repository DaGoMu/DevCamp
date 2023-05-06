
import { keyBy, filter } from 'lodash';

// LISTAS DE PLATOS
const dishes = [
    {name: "Fried Eggs", type: "MainBreakfast"},
    {name: "Scrambled Eggs", type: "MainBreakfast"},
    {name: "Pancakes", type: "MainBreakfast"},
    {name: "Omelets", type: "MainBreakfast"},
    {name: "Burritos", type: "MainBreakfast"},
    {name: "Cereal", type: "MainBreakfast"},
    {name: 'Sausage Links', type: "SideBreakfast"},
    {name: 'Ham', type: "SideBreakfast"},
    {name: 'Fruit', type: "SideBreakfast"},
    {name: 'Bagels', type: "SideBreakfast"},
    {name: 'Bacon', type: "SideBreakfast"},
    {name: 'Oatmeal', type: "SideBreakfast"},
    {name: 'Grits', type: "SideBreakfast"},
    {name: 'Biscuits', type: "SideBreakfast"},
    {name: 'Yogurt', type: "SideBreakfast"},

        //Lunch Dishes
    {name: "Cold Cut Sandwiches", type: "MainLunch"},
    {name: "Hamburgers", type: "MainLunch"},
    {name: "Chicken Patti Sandwiches", type: "MainLunch"},
    {name: "Grilled Cheese", type: "MainLunch"},
    {name: "Hot Dogs", type: "MainLunch"},
    {name: "Chili Dogs", type: "MainLunch"},
    {name: 'Mac & Cheese', type: 'SideLunch'},
    {name: 'French Fries', type: 'SideLunch'},
    {name: 'Cajun Fries', type: 'SideLunch'},
    {name: 'Onion Rings', type: 'SideLunch'},
    {name: 'Potato Salad', type: 'SideLunch'},
    {name: 'Baked Beans', type: 'SideLunch'},
    {name: 'Salad', type: 'SideLunch'},
    {name: 'Chips', type: 'SideLunch'}
]



// Filtrado por tipo
const mainBreakfast = _.filter(dishes, dish => {
    return dish.type == 'MainBreakfast';
})
const sideBreakfast = _.filter(dishes, dish => {
    return dish.type == 'SideBreakfast';
})
const mainLunch = _.filter(dishes, dish => {
    return dish.type == 'MainLunch';
})
const sideLunch = _.filter(dishes, dish => {
    return dish.type == 'SideLunch';
})

let order = []

// Determina qué tipo de comida va a mostrar
function momentDay( typeMenu = menuType){
   if (typeMenu == 'Breakfast') {
    console.log('¿Que vas a desayunar?')
   }else if( typeMenu == 'Lunch'){
    console.log('¿Que vas a comer?')
   }else if (typeMenu == 'Dinner'){
    console.log('¿Que vas a cenar?')
   }else{
    console.log('¿Que vas a comer?')
   }
   
   
}
// Elegir momento del dia
let menuType = ''
function typeOfMenuElection (){
    const miArray = ["Breakfast", "Lunch", "Dinner"];
    let opciones = ''

    for (let i = 0; i < miArray.length; i++) {
        opciones += (i + 1 ) + ". " + miArray[i] + "\n";
      }
    const seleccion = prompt("Qué tipo de menu desea elegir?:\n" + opciones);

    if (seleccion != null) {
        const seleccionIndex = miArray.indexOf(seleccion);
        const objetoIndex = parseInt(seleccion) - 1;
        if (objetoIndex >= 0 && objetoIndex < miArray.length) {
            console.log("Has elegido el menú para " + miArray[objetoIndex]);
            menuType = miArray[objetoIndex];
          }
        else {
          console.log("No elegiste una opción válida");
        }
      } else {
        console.log("No elegiste ninguna opción");
      }
      
       

}


// Render Menu

function renderMainMenu (typeMenu = menuType){
    let opciones = "";
    let menu = '';
    
    if (typeMenu == 'Breakfast') {
      menu = mainBreakfast;
        for (let i = 0; i < menu.length; i++) {
        opciones += `${(i + 1)}. ${menu[i].name} \n`;
        
        }
    }else if (typeMenu == 'Lunch'){
      menu = mainLunch;
        for (let i = 0; i < menu.length; i++) {
            opciones += `${(i + 1)}. ${menu[i].name} \n`;
            }
    }

    const seleccion = prompt("Elige un plato principal, por favor:\n" + opciones);

    // Seleccion del menu

  if (seleccion != null) {
      const objetoIndex = parseInt(seleccion) - 1;
      if (objetoIndex >= 0 && objetoIndex < menu.length) {
          order.push(menu[objetoIndex].name)
        console.log("Elegiste el objeto " + menu[objetoIndex].name );
      } else {
        console.log("No elegiste una opción válida");
      }
    } else {
      console.log("No elegiste ninguna opción");
    }

}

function renderSideMenu (typeMenu = menuType, promptText){
    let opciones = "";
    let sideMenu = "";
    
    if (typeMenu == 'Breakfast') {
      sideMenu = sideBreakfast;
        for (let i = 0; i < sideMenu.length; i++) {
        opciones += `${(i + 1)}. ${sideMenu[i].name} \n`;
        
        }
    }else if (typeMenu == 'Lunch'){
      sideMenu = sideLunch;
        for (let i = 0; i < sideMenu.length; i++) {
            opciones += `${(i + 1)}. ${sideMenu[i].name} \n`;
            }
        }

        const seleccion = prompt(`${promptText}\n  ${opciones}`);

// Seleccion del menu

  if (seleccion != null) {
      const objetoIndex = parseInt(seleccion) - 1;
      if (objetoIndex >= 0 && objetoIndex < sideMenu.length) {
        console.log("Elegiste el objeto " + sideMenu[objetoIndex].name );
        order.push(sideMenu[objetoIndex].name)

      } else {
        console.log("No elegiste una opción válida");
      }
  } else {
    console.log("No elegiste ninguna opción");
  }
}

function checkOrder (checking = order){
  let regularPrice = 7;
  let extrasPrice = 2;
  let extras = checking.length - 3

  console.log(`Pedido correcto: ${checking} \n
  Precio: ${regularPrice}`)
  return `
  Pedido correcto \n 
  Plato principal: ${checking[0]} \n
  Side 1: ${checking[1]} \n
  Side 2: ${checking[2]} \n
  Precio del menú: ${regularPrice} \n

  Extras: ${checking.slice(3)} \n
  ${extrasPrice*extras}

  Precio: ${regularPrice + extrasPrice*extras} $
  `


  }

function addExtras (){
  if (confirm("¿Desea algun complemento mas antes de finalizar?") == true) {
    renderSideMenu(menuType, 'Añada un extra por $1');
    addExtras();
  } else {
    alertCheckOrder();
  }
}
function alertCheckOrder (){
  if (confirm(
  `¿Por favor revise su pedido y compruebe que todo esté en orden \n
  ${checkOrder()}
  
  `) == true) {
    goodBye();
  } else {
    resetOrder();
  }
}

function resetOrder(){
  if (confirm(
    `¿Esta seguro que desea reiniciar el pedido? \n`
    ) == true) {
      mainFlow();
    } else {
      alertCheckOrder();
    }
}

function greeting(){
  confirm('Bienvenido a Devcamp Diner.')
}

function goodBye (){
  confirm("Gracias por su pedido. En seguida se lo servimos.")
}

let menuCounter = 0;
function mainFlow (){
  order = []
  renderMainMenu();
  renderSideMenu(menuType,'Elige el Side 1 por favor')
  console.log(menuCounter)
  menuCounter += 1;
  console.log(menuCounter)
  if (menuCounter = 2){
    renderSideMenu(menuType,'Elige el Side 2 por favor.')
    menuCounter += 1;
    console.log(menuCounter)
  }
    addExtras();
  

}

        // TESTS
        
 typeOfMenuElection();
 console.log(menuType)
 momentDay()
//  renderMainMenu()
//  renderSideMenu()
//  renderSideMenu()
mainFlow();

 console.log(checkOrder());




//  momentDay('dinner')
// renderMenuOptions()

//  RENDER HTML






//     return `Bienvenido a nuestro restaurante. Este es es nuestro menú para desayunar:<br>
//    `
// }

//  console.log(mainBreakfast)

//  console.log(greeting())

