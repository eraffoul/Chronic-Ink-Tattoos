import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // TODO: write your code here
      return ((this.center.x - Point.x)**2 + (this.center.y - Point.y)**2) <= this.radius**2
    }
  }
}
