{ // Version 1: MVP.
    let calculateSecondsSinceBirth = function (birthMonthAsString, birthYearAsString) {
        let birthMonth = parseInt(birthMonthAsString)
        let birthYear = parseInt(birthYearAsString)
        let currentMonth = new Date().getMonth() + 1
        let currentYear = new Date().getFullYear()
        let secondsInOneYear = 365 * 24 * 60 * 60
        let secondsInOneMonth = 30 * 24 * 60 * 60
        let yearsInBetween = currentYear - birthYear - 1

        let secondsInFirstYear = secondsInOneMonth * (12 - birthMonth)
        let secondsInBetween = yearsInBetween * secondsInOneYear
        let secondsInCurrentYear = secondsInOneMonth * currentMonth

        return secondsInFirstYear + secondsInBetween + secondsInCurrentYear
    }

    let june1997 = calculateSecondsSinceBirth(6, 1997)
    let nov2001 = calculateSecondsSinceBirth(11, 2001)
    let sep1983 = calculateSecondsSinceBirth(9, 1983)

    console.log({ june1997, nov2001, sep1983 })

    // Synchronous programming: only one thing can happen at a time, in sequence

    let handleView = function () {
        let userBirthMonth = prompt("Please enter your month of birth (as a number; for example, November would be \"11\").")
        let userBirthYear = prompt("Please enter your year of birth (as a number; for example, \"1998\").")

        console.assert(userBirthMonth !== null, "User canceled input for userBirthMonth!")
        console.assert(userBirthYear !== null, "User canceled input for userBirthYear!")

        let result = calculateSecondsSinceBirth(userBirthMonth, userBirthYear)
    
        console.log({ userBirthMonth, userBirthYear, result })
        document.write(
            "<h2>Seconds Alive Results</h2>" 
            + "<p>Congratulations! "
            + "You have been alive for approximately " 
            + result.toLocaleString() 
            + " seconds!</p>"
        )

        // template strings
    }

    handleView()

}



{ // VERSION 2: Less code. More precise.
  //               But we are also trusting the user for more,
  //            because they could enter any string they wish,
  //            which could break the code, unless we control 
  //            HOW the user inputs their information.
  //               So this function would probably NEED to be 
  //            paired with an HTML form containing a datepicker
  //            instead of a text box:
  //                  <input type="date" id="birthDate">
  //                  birthDate.value
  //
  //               We'll talk more about getting user input from
  //            forms later in the course. We'll have to get to
  //            a few other things first.
    let calculateSecondsSinceBirth = function (birthDateAsString) {
        let birthDate = new Date(birthDateAsString)
        let currentDate = new Date()
        let differenceInMilliseconds = currentDate - birthDate
        let differenceInSeconds = differenceInMilliseconds / 1000

        return Math.round(differenceInSeconds)
    }
    
    let june1997 = calculateSecondsSinceBirth("June 1997")
    let nov2001 = calculateSecondsSinceBirth("November 17, 2001")

    console.log({ june1997, nov2001 })
}
