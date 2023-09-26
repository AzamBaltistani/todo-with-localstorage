export default function sorter(todolist, sortOrder) {
  if (Number(sortOrder) >= 11 && Number(sortOrder) <= 13) {
    var tempList = [...todolist];
    tempList.sort((a, b) => {
      let idA = Number(a.id);
      let idB = Number(b.id);

      return idA - idB;
    });

    // input and start
    if (Number(sortOrder) === 12) {
      tempList.sort((a, b) => {
        if (a.complete && b.complete) {
          return 1;
        }
        if (!a.complete && b.complete) {
          return -1;
        }
        if (a.complete && !b.complete) {
          return 1;
        }
      });
    }

    if (Number(sortOrder) === 13) {
      tempList.sort((a, b) => {
        if (a.complete && b.complete) {
          return 1;
        }
        if (!a.complete && b.complete) {
          return 1;
        }
        if (a.complete && !b.complete) {
          return -1;
        }
      });
    }

    return tempList;
  }

  if (Number(sortOrder) >= 21 && Number(sortOrder) <= 23) {
    var tempList = [...todolist];
    tempList.sort((a, b) => {
      let idA = Number(a.id);
      let idB = Number(b.id);

      return idB - idA;
    });

    if (Number(sortOrder) === 22) {
      tempList.sort((a, b) => {
        if (a.complete && b.complete) {
          return 1;
        }
        if (!a.complete && b.complete) {
          return -1;
        }
        if (a.complete && !b.complete) {
          return 1;
        }
      });
    }
    if (Number(sortOrder) === 23) {
      tempList.sort((a, b) => {
        if (a.complete && b.complete) {
          return 1;
        }
        if (!a.complete && b.complete) {
          return 1;
        }
        if (a.complete && !b.complete) {
          return -1;
        }
      });
    }

    return tempList;
  }
}
