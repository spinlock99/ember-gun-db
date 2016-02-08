import DS from 'ember-data';

export default DS.Model.extend(
  {
    isComplete: DS.attr('boolean'),
    title: DS.attr('string')
  }
);
