const memoryCost= document.getElementById('memory-cost');
const storageCost= document.getElementById('storage-cost');
const deliveryCost= document.getElementById('delivery-cost');

const bestPriceValue= document.getElementById('best-price');
const total =document.getElementById('total-cost');
const totalUpdatePrice= document.getElementById('update-total');

/////////.... cost calculation////////////
function getTotalCost(items){
const costValue=document.getElementById(items+'-cost');
const totalCostValue=parseInt(costValue.innerText);
const bestPriceValue= document.getElementById('best-price');

const bestPrice=parseInt(bestPriceValue.innerText);
const totalvalue= bestPrice + totalCostValue;
total.innerText=totalvalue;

}
// memory button /////////
document.getElementById('memory1-btn').addEventListener('click', function(){
memoryCost.innerText='0';
    getTotalCost('memory');
    getUpdateTotal('memory')
   });
document.getElementById('memory2-btn').addEventListener('click', function(){
memoryCost.innerText='180';
    getTotalCost('memory');
    getUpdateTotal('memory')
   });

//  storage button ///////
document.getElementById('storage1-btn').addEventListener('click', function(){
storageCost.innerText='0';
    getTotalCost('storage');
    getUpdateTotal('storage')
   });
document.getElementById('storage2-btn').addEventListener('click', function(){
storageCost.innerText='100';
    getTotalCost('storage');
    getUpdateTotal('storage')
   });
document.getElementById('storage3-btn').addEventListener('click', function(){
storageCost.innerText='180';
    getTotalCost('storage');
    getUpdateTotal('storage')
   });


//    delivery button /////////
document.getElementById('delivery1-btn').addEventListener('click', function(){
deliveryCost.innerText='0';
getTotalCost('delivery');
getUpdateTotal('delivery')
 });

 document.getElementById('delivery2-btn').addEventListener('click', function(){
 deliveryCost.innerText='20';
 getTotalCost('delivery');
 getUpdateTotal('delivery')
 });


////// update bounas part //////////

function getUpdateTotal(items){
    const updateValue=document.getElementById(items+'-cost');
    const totalUpdateValue=parseInt(updateValue.innerText);
    const updatePriceValue= document.getElementById('best-price');
    
    const updatePrice=parseInt(updatePriceValue.innerText);
    const totalUpdate= updatePrice + totalUpdateValue;
    totalUpdatePrice.innerText=totalUpdate;
    
    }


