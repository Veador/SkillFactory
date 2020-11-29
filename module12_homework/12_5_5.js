class Device {
    constructor(name, wattConsumption, state) {
        this.owner = 'Evgenii',
        this.deviceName = name,
        this.wattConsumption = wattConsumption,
        this.state = state;
    }
    MessageOfState(state) {
        return (`"${this.deviceName}" is ${state ? "On" : "Off"}`);
    }
    WattByState(state) {
        return state ? this.wattConsumption : this.wattConsumption * 0;
    }
};

class Charger extends Device {
    constructor(name, wattConsumption, forDevice) {
        super(Device),
        this.deviceName = name,
        this.wattConsumption = wattConsumption,
        this.forDevice = forDevice;
    }
};

class Laptop extends Device {
    constructor(name, wattConsumption, isSleep) {
        super(Device),
        this.deviceName = name,
        this.wattConsumption = (isSleep === true) ? wattConsumption : wattConsumption * 2,
        this.isSleep = isSleep; //не хватило времени придумать как задействовать
    }
};

const charger = new Charger('Phone charger', 18, 'Xiaomi');
const lamp = new Device('Table lamp', 7);
const laptop = new Laptop('MacBook', 96, false)

const WattSum = (chargerState, laptopState, lampState) => {
    console.log('Суммарное потребление равно: ' + (laptop.WattByState(laptopState) + charger.WattByState(chargerState) + lamp.WattByState(lampState)))
    console.log(charger.MessageOfState(chargerState))
    console.log(laptop.MessageOfState(laptopState))
    console.log(lamp.MessageOfState(lampState))
}

WattSum(0,0,1)