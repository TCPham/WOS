//The Basic 13

/*

//1
function print_1_to_255() {
    for (let i=0;i<=255;i++) {
        console.log(i);
    }
}
print_1_to_255();

//2
function print_odds_1_to_255() {
    for (let i=0;i<=255;i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
        else {
            continue;
        }
    }
}
print_odds_1_to_255();

//3
function print_ints_and_sum_0_to_255() {
    var sum = 0;
    for (let i=0;i<=255;i++) {
        sum += i;
        console.log(sum);
    }
}
print_ints_and_sum_0_to_255();

//4
const lst = ["Yorkie", "Corgi", "Chihuahua"];
function print_list_vals(lst) {
    for (let i=0;i<lst.length;i++) {
        console.log(lst[i]);
    }
}
print_list_vals(lst);

//5
const lst = [5, 42, 5, 18, 20];
function print_max_of_list(lst) {
    // console.log(Math.max(...lst));
    max = lst[0];
    for (let i=1;i<lst.length;i++) {
        if (lst[i] > max) {
            max = lst[i];
        }
        else if (lst[i] = max) {
            continue;
        }
    }
    console.log("Max:" + max);
}
print_max_of_list(lst);

//6
const lst = [5, 42, 5, 18, 20];
function print_average_of_list(lst) {
    var avg;
    var sum = 0;
    for (let i=0;i<lst.length;i++) {
        sum += lst[i];
    }
    avg = sum / lst.length;
    console.log(avg);
}
print_average_of_list(lst);

//7
function return_odds_list_1_to_255() {
  const lst = [];
  for (let i = 0; i <= 255; i++) {
    if (i % 2 == 1) {
      lst.push(i);
    }
  }
  console.log(lst);
}
return_odds_list_1_to_255();

//8
const lst = [5, 42, 5, 18, 20];
function square_list_vals(lst) {
    for (let i=0;i<lst.length;i++) {
        lst[i] = lst[i] ** 2;
    }
    console.log(lst);
}
square_list_vals(lst);

//9
var val = 20;
const lst = [5, 42, 5, 18, 20];
function greater_than_val(lst, val) {
    var count = 0;
    for (let i=0;i<lst.length;i++) {
        if (lst[i] > val) {
            count++;
        }
    }
    console.log(count);
}
greater_than_val(lst, val);

//10
const lst = [-4, 42, 5, -18, 20];
function zero_out_list_negatives(lst) {
    for (let i=0;i<lst.length;i++) {
        if (lst[i] < 0) {
            lst[i] = 0;
        }
        else {
            continue;
        }
    }
    console.log(lst);
}
zero_out_list_negatives(lst);

//11
const lst = [-4, 42, 5, -18, 20];
function max_min_average(lst) {
    max = lst[0];
    min = lst[0];
    sum = 0;
    var avg;
    for (let i=1;i<lst.length;i++) {
        sum += lst[i];
        if (max < lst[i]) {
            max = lst[i];
        };
        if (min > lst[i]) {
            min = lst[i];
        };
        avg = sum / lst.length;
    }
    console.log("Max: " + max);
    console.log("Min: " + min);
    console.log("Avg: " + avg);
}
max_min_average(lst);

*/

//12
const lst = [-4, 0, 42, 5, 0, -18, 20];
const newLst = [];
var count = 0;
function shift_list_vals_left(lst) {
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] != 0) {
      newLst.push(lst[count]);
      count++;
    }
  }
  console.log(newLst);
}
shift_list_vals_left(lst);

/*

//13
const arr = [-4, 0, 42, 5, 0, -18, 20];
function swapStringForArrayNegativeVals(arr) {
    for (let i=0;i<arr.length;i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    console.log(arr);
}
swapStringForArrayNegativeVals(arr);

*/
