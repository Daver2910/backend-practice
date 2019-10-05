const mongoose = require('mongoose');

const TimeSlotSchema = mongoose.Schema({
    slot_id: {
        type: String,
        required: true
    },
    reserved: {
        type: Boolean,
        default: false
    },
    reservation_id: String,
    available: {
        type: Boolean,
        default: true
    }
});

const CalendarSchema = mongoose.Schema({
    store_id: {
        type: String,
        required: true
    },
    date: {
        date_id: Date,
        slots: [TimeSlotSchema]
    }
});

module.exports = {
    CalendarModel: mongoose.model('Calendar', CalendarSchema),
    TimeslotModal: mongoose.model('Timeslot', TimeSlotSchema)
};
