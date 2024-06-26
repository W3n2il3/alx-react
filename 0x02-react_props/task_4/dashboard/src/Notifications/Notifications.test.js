
import React from "react";
// import { shallow } from "enzyme";
import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications";

/*
test that Notifications renders without crashing
verify that Notifications renders three list items
verify that Notifications renders the text Here is the list of notifications
 */

// describe("Notification component tests", () => {
//     let notification;
//     beforeEach(() => {
//         // notification = shallow(<Notifications />)
//         notification = shallow(<Notifications />)
//     })
//   it("renders Notification component without crashing", () => {
//     expect(notification).toBeDefined();
//   });

//   it("renders ul", () => {
//     expect(notification.find("ul")).toBeDefined();
//   });

//   it("renders three list items", () => {
//     expect(notification.find("li")).toHaveLength(3);
//   });

//   it("renders correct text", () => {
//     expect(notification.find("p").text()).toBe("Here is the list of notifications");
//   });
// });


test('Notifications component renders without crashing', () => {
  render(<Notifications  displayDrawer={true} />)
  expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument()
})

test("Notifications renders ul", () => {
  render(<Notifications displayDrawer={true} />)
  expect(screen.getByRole('list')).toBeDefined();
});

test("Notifications renders three list items", () => {
  render(<Notifications displayDrawer={true} />)
  expect(screen.getAllByRole('listitem').length).toBe(3);
});

test("Notifications renders three  NotificationItem instances", () => {
  render(<Notifications displayDrawer={true} />)
  // expect(screen.getByTestId('child')).toBeInTheDocument() -> how can I access child components?
});

test('NotificationItem renders menuItem when displayDrawer is false', () => {
  render(<Notifications />)
  expect(screen.getByText('Your notifications')).toBeDefined()
})

test('NotificationItem renders menuItem when displayDrawer is true', () => {
  render(<Notifications displayDrawer={true} />)
  expect(screen.getByText('Your notifications')).toBeDefined()
})

