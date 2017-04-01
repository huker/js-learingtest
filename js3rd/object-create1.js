/**
 * Created by huk on 17/3/20.
 */
//委托理论 对象关联
Task = {
    setId:function (id) {
        this.id = id;
    },
    outputId:function () {
        console.log(this.id)
    }
};
XYZ = Object.create(Task);
// console.log(XYZ.__proto__)
// XYZ.setId('1');
// XYZ.outputId();
XYZ.prepareTask = function (id, label) {
    this.setId(id);
    this.label = label;
};
XYZ.detail = function () {
    this.outputId();
    console.log(this.label)
};
XYZ.prepareTask('1','23');
XYZ.detail();
