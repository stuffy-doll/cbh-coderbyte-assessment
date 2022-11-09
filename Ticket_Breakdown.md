# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

I see the ticket breaking down to two parts.

1. A custom agent Id column could be added to the database. Assuming the relationship between Facilities and Agents is a many-to-many relationship, the agent id could be stored on the join table associating facilities and agents.

2. When the getShiftsByFacility function is called add an extra snipped of code to
include the customer agent id as it relates to the agent and facility and include that data in the function's return.

I created a mockup of the database and it's relations to help visualize and come up with a solution to the problem.

![db](https://user-images.githubusercontent.com/97128550/200959791-28700c73-c54e-4c1f-a819-fa27910451b5.PNG)

