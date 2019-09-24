import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

subject.next(Math.random());
subject.next(2);

// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2


/*
// basic example
var { of } = require('rxjs');
var { map, catchError } = require( 'rxjs/operators');
import { take, takeLast } from 'rxjs/operators'
import { range } from 'rxjs';

const many=range(1,100);
const lastThree = many.pipe(takeLast(3));

lastThree.subscribe({
  next: (x)=>{console.log(x);}
})
*/