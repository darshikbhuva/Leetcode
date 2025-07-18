function countAvailableDays(days, meetings) {
  if (meetings.length === 0) return days;

  meetings.sort((a, b) => a[0] - b[0]);

  let mergedMeetings = [];
  let prevMeeting = meetings[0];

  for (let i = 1; i < meetings.length; i++) {
    let currMeeting = meetings[i];

    if (currMeeting[0] <= prevMeeting[1]) {
      prevMeeting[1] = Math.max(prevMeeting[1], currMeeting[1]);
    } else {
      mergedMeetings.push(prevMeeting);
      prevMeeting = currMeeting;
    }
  }
  mergedMeetings.push(prevMeeting);

  let occupiedDays = 0;
  for (let [start, end] of mergedMeetings) {
    occupiedDays += end - start + 1;
  }

  return days - occupiedDays;
}

let days = 10;
let meetings = [
  [5, 7],
  [1, 3],
  [9, 10],
];

console.log(countAvailableDays(days, meetings));
