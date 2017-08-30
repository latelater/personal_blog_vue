var arr = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85];
function swap(arr, i, j) {
    var temp = 0;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
function Sort(arr, left, right) {
    var s = arr[left];
    var i = left;
    var j = right;
    while(i < j) {
        if(arr[i] <= s) {
            i ++;
        }

        if(arr[j] >= s) {
            j ++;
        }

        arr = swap(arr, i, j);
    }

    arr = swap(arr, left, j);
    console.log(arr);

}
