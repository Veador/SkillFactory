function Device(name, wattConsumption, state){
    this.owner = 'Evgenii',
    this.deviceName = name,
    this.wattConsumption = wattConsumption,
    this.state = state
};

Device.prototype.MessageOfState = function(state){
    return(`"${this.deviceName}" is ${state ? "On" : "Off"}`)
};

Device.prototype.WattByState = function(state) {
    return state ? this.wattConsumption : this.wattConsumption*0;
};


function Charger(name, wattConsumption, forDevice){
    this.deviceName = name,
    this.wattConsumption = wattConsumption,
    this.forDevice = forDevice
};
Charger.prototype = new Device();

function Laptop(name, wattConsumption, isSleep){
    this.deviceName = name,
    this.wattConsumption = (isSleep===true)? wattConsumption : wattConsumption*2, 
    this.isSleep = isSleep   //не хватило времени написать исппользование этого
};
Laptop.prototype = new Device();

const charger = new Charger('Phone charger', 18, 'Xiaomi');
const lamp = new Device('Table lamp', 7);
const laptop = new Laptop('MacBook', 96, false)

const WattSum = (chargerState, laptopState, lampState) => {
    console.log('Суммарное потребление равно: ' + (laptop.WattByState(laptopState) + charger.WattByState(chargerState) + lamp.WattByState(lampState)))
    console.log(charger.MessageOfState(chargerState))
    console.log(laptop.MessageOfState(laptopState))
    console.log(lamp.MessageOfState(lampState))
}

WattSum(1,1,1)


//красивее, чем WattSum не смог придумать =(