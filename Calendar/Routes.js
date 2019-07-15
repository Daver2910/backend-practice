import express from 'express';
import CalendarFactory from '../Calendar/Factory';
const router = express.Router();

router.post('/create', (req, res) => {

    const Calendar = new CalendarFactory(req, res);
    Calendar.CreateSlots()

});

router.get('/:store_id', (req, res) => {

    const Calendar = new CalendarFactory(req, res);
    Calendar.GetCalendarByStoreId()

});

// router.patch('/client/:client_id', (req, res) => {
//
//     const Client = new ClientFactory(req, res);
//     Client.EditClient()
//
// });

export default router;
