/**
 * Created by hu on 2016/2/24.
 */
var a={};
var b={key:'b'};
var c={key:'c'};
a[b]=123;
console.log(Object.keys(a));
a[c]=456;
console.log(Object.keys(a));
console.log(a[b]);//456
/*
* ��һ��console a��������[object object]
* �ڶ���Ҳ��
* ��b��Ϊ����ʱ ���ǰ�'[object object]'����ַ�����Ϊ����
* ������ʲô���� ת���ַ�������'[object object]'
* ����a[c]�ŻḲ��a[b]
* */