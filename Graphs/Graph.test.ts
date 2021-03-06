// you work for a professional social network. in this social network, a professional
// can follow other people to see their updates (think Twitter for professionals.)
// write a function that finds the job `title` that shows up most frequently given
// a set of degree of separation from you. count initial id's own job title in the total
import bloop from "./GraphData";
const { getUser, getMe } = bloop;

interface User {
  id: number;
  name: string;
  company: string;
  title: string;
  connections: number[];
}
/*
 * parameters:
 * myId                - number    - the id of the user who is the root node
 * getUser             - function - a function that returns a user's object given an ID
 * degreesOfSeparation - number   - how many degrees of separation away to look on the graph
 */
const findMostCommonTitleV1 = (
  myId: number,
  getUser: Function,
  degreesOfSeparation: number
): string => {
  // code goes here

  // use dict to keep track of the numbers
  const titleDict: { [key: string]: number } = {};
  // store visited user id's in a set
  const visited: Set<number> = new Set();

  const q: [User, number][] = [[getUser(myId), 0]];
  while (q.length) {
    // the idea is to do a BFT, but only for a limited amount of steps away from the root
    // we will save the distance from the root in the queue along with the user id
    // and stop when the current distance becomes bigger than degreesOfSeparation.
    let cur = q.shift();
    if (!cur) continue;

    const [currentUser, distance] = cur;
    // stop if we are far anonugh from the root
    // console.log(currentUser);
    if (distance > degreesOfSeparation) break;

    // add user to visited if not and increment/initialize title count
    if (!visited.has(currentUser.id)) {
      visited.add(currentUser.id);
      if (currentUser.title in titleDict) {
        titleDict[currentUser.title] += 1;
      } else {
        titleDict[currentUser.title] = 0;
      }

      // get all of unvisited neighbors and push them to the queue with current distance+1
      for (let connection of currentUser.connections) {
        if (visited.has(connection)) continue;
        q.push([getUser(connection), distance + 1]);
      }
    }
  }

  let mostCommonTitle = "";
  let max = 0;
  for (let [title, count] of Object.entries(titleDict)) {
    if (count > max) {
      max = count;
      mostCommonTitle = title;
    }
  }

  return mostCommonTitle;
};

const findMostCommonTitle = (
  myId: number,
  getUser: (value: number) => User,
  degreesOfSeparation: number
): string => {
  let queue = [myId];
  const seen: Set<number> = new Set();
  const jobs: { [key: string]: number } = {};

  for (let i = 0; i <= degreesOfSeparation; i++) {
    queue = queue
      .filter((id) => !seen.has(id))
      .map(getUser)
      .map((user) => {
        jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1;
        seen.add(user.id);
        return user.connections;
      })
      .reduce((acc, current) => acc.concat(current), []);
  }

  return Object.entries(jobs).reduce(
    (acc, pair) => (pair[1] > acc[1] ? pair : acc),
    ["", 0]
  )[0];
};

// unit tests
// do not modify the below code
describe("findMostCommonTitle", function () {
  // the getUser function and data comes from this CodePen: https://codepen.io/btholt/pen/NXJGwa?editors=0010
  // I recommend finishing these one at a time. if you put an x in front of the it so the function call is
  // xit it will not run
  it("user 30 with 2 degrees of separation", () => {
    expect(findMostCommonTitle(30, getUser, 2)).toBe("Librarian");
  });

  it("user 11 with 3 degrees of separation", () => {
    expect(findMostCommonTitle(11, getUser, 3)).toBe("Graphic Designer");
  });

  it("user 307 with 4 degrees of separation", () => {
    // if you're failing here with "Clinical Specialist, you're probably not filtering users who
    // appear more than once in people's connections
    expect(findMostCommonTitle(306, getUser, 4)).toBe("Environmental Tech");
  });
});

// remove x from describe to run
describe("extra credit", function () {
  it("user 1 with 7 degrees of separation – this will traverse every user that's followed by someone else. five users are unfollowed", () => {
    expect(findMostCommonTitle(1, getUser, 7)).toBe("Geological Engineer");
  });
});
