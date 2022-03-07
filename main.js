{ // Version 1: MVP.
    let calculateSecondsSinceBirth = function (birthMonth, birthYear) {
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

    console.log({ june1997, nov2001 })

}



{ // VERSION 2: Less code. More precise.
  //               But we are also trusting the user for more,
  //            because they could enter any string they wish,
  //            which could break the code, unless we control 
  //            HOW the user inputs their information.
  //               So this function would probably NEED to be 
  //            paired with an HTML form containing a datepicker
  //            instead of a text box:
  //                  <input type="date">
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
