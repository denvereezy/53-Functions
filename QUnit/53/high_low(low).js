function low() {
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(b, a){
      return a-b;
    });
    return points[0];
}

