const CalendarModel = require('./Model').CalendarModel;
const TimeslotModel = require('./Model').TimeslotModal;

class CalendarFactory {

    constructor(req, res) {
        this.res = res;
        this.opening_hours = req.body.opening_hours;
        this.ExistingStoreId = req.params.store_id;

        this.CalendarObject = (ArrayOfSlots) => {
            let dateKey = {};
            dateKey[req.body.date] = ArrayOfSlots;

            new CalendarModel({
                store_id: req.body.store_id,
                date: dateKey
            });
        }
    }

    GetCalendarByStoreId () {
        CalendarModel.findOne({store_id: this.ExistingStoreId})
            .then(Client => {
                this.res.status(200)
                    .send(Client)
                    .end();
            })
            .catch(error => this.res.json({
                message: error
            }));
    }

    CreateSlots() {
        let number = 5;
        let Slots = [];
        for (let i = 0; i<number; i++){

            let Slot = new TimeslotModel({
                slot_id: i,
                reservation_id: Math.random()
            });
            Slots.push(Slot)
        }

        this.CalendarObject(Slots)
            .save()
            .then((DBClient) => {
                this.res
                    .status(200)
                    .send(DBClient)
                    .end()
            })
            .catch(error => {
                this.res
                    .status(404)
                    .json({
                        message: error
                    })
            })
    }
}

export default CalendarFactory;
