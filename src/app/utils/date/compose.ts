import {Time} from '../../../common/types';
import moment from 'moment';

export function compose(time: Time) {
    const timeValue = moment()
        .hour(time.hour)
        .minute(time.minute)
        .second(time.second);

    return timeValue.toDate();
}
