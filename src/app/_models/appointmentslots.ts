export class AppointmentSlots {
    isSelected: boolean;
    id: string;
    locationName: string;
    appointmenttypeId: string;
    appointmentlocationId: string;
    earliestavailabledate: string;
    dateforslots: string;
    isEdit: boolean;

    // constructor(
    //   public id: string,
    //   public Location: string,
    //   public appointmenttypeId: string,
    //   public appointmentlocationId: string,
    //   public earliestavailabledate: string,
    //   public dateforslots: string,
    //   public isEdit: boolean){

    // }
}

export const TableColumns = [
    {
      key: 'isSelected',
      type: 'isSelected',
      label: '',
      readonly: true
    },
    {
      key: 'locationName',
      type: 'text',
      label: 'Location',
      required: true,
      readonly: true
    },
    {
      key: 'earliestavailabledate',
      type: 'text',
      label: 'Earliest Available Date',
      readonly: true
    },
    {
      key: 'dateforslots',
      type: 'date',
      label: 'Notify slots before date',
      required: true,
      readonly: false
    },
    {
      key: 'isEdit',
      type: 'isEdit',
      label: '',
    },
  ];