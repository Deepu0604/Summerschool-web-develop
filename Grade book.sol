// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GradeBook {
    address public owner;
    
    struct Grade {
        string studentName;
        string subject;
        string grade;
        bool isVerified;
    }
    
    Grade[] private grades;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    function addGrade(string memory _studentName, string memory _subject, string memory _grade) public onlyOwner {
        require(isValidGrade(_grade), "Invalid grade");
        grades.push(Grade({
            studentName: _studentName,
            subject: _subject,
            grade: _grade,isVerified: false 
        }));
    }
    
    function updateGrade(string memory _studentName, string memory _subject, string memory _grade) public onlyOwner {
        require(isValidGrade(_grade), "Invalid grade");
        for (uint i = 0; i < grades.length; i++) {
            if (keccak256(abi.encodePacked(grades[i].studentName)) == keccak256(abi.encodePacked(_studentName)) && keccak256(abi.encodePacked(grades[i].subject)) == keccak256(abi.encodePacked(_subject))) {
                grades[i].grade = _grade;
                return;
            }
        }
        revert("Grade entry not found");
    }

   
    function getGrade(string memory _studentName, string memory _subject) public view returns (string memory) {
        for (uint i = 0; i < grades.length; i++) {
            if (keccak256(abi.encodePacked(grades[i].studentName)) == keccak256(abi.encodePacked(_studentName)) && keccak256(abi.encodePacked(grades[i].subject)) == keccak256(abi.encodePacked(_subject))) {
                return (grades[i].grade);
            }
        }
        revert("Grade entry not found");
    }
    
    function averageGrade(string memory _subject) public view returns (string memory) {
        uint256 totalPoints = 0;
        uint256 count = 0;
        for (uint i = 0; i < grades.length; i++) {
            if (keccak256(abi.encodePacked(grades[i].subject)) == keccak256(abi.encodePacked(_subject))) {
                totalPoints += gradeToPoints(grades[i].grade);
                count++;
            }
        }
        require(count > 0, "No grades found for this subject");
        uint256 averagePoints = totalPoints / count;
        return pointsToGrade(averagePoints);
    }
    
    function isValidGrade(string memory _grade) internal pure returns (bool) {
        return keccak256(abi.encodePacked(_grade)) == keccak256(abi.encodePacked("S")) ||
               keccak256(abi.encodePacked(_grade)) == keccak256(abi.encodePacked("A")) ||
               keccak256(abi.encodePacked(_grade)) == keccak256(abi.encodePacked("B")) ||
               keccak256(abi.encodePacked(_grade)) == keccak256(abi.encodePacked("C")) ||
               keccak256(abi.encodePacked(_grade)) == keccak256(abi.encodePacked("D")) ||
               keccak256(abi.encodePacked(_grade)) == keccak256(abi.encodePacked("E")) ||
               keccak256(abi.encodePacked(_grade)) == keccak256(abi.encodePacked("U"));
    }
    
    function gradeToPoints(string memory _grade) internal pure returns (uint256) {
        if (keccak256(abi.encodePacked(_grade)) == keccak256(abi.encodePacked("S"))) {
            return 10;
        } else if (keccak256(abi.encodePacked(_grade)) == keccak256(abi.encodePacked("A"))) {
            return 9;
        } else if (keccak256(abi.encodePacked(_grade)) == keccak256(abi.encodePacked("B"))) {
            return 8;
        } else if (keccak256(abi.encodePacked(_grade)) == keccak256(abi.encodePacked("C"))) {
            return 7;
        } else if (keccak256(abi.encodePacked(_grade)) == keccak256(abi.encodePacked("D"))) {
            return 6;
        } else if (keccak256(abi.encodePacked(_grade)) == keccak256(abi.encodePacked("E"))) {
            return 4;
        } else {
            return 0;
        }
    }
    
    function pointsToGrade(uint256 points) internal pure returns (string memory) {
        if (points >= 10) {
            return "S";
        } else if (points >= 9) {
            return "A";
        } else if (points >= 8) {
            return "B";
        } else if (points >= 7) {
            return "C";
        } else if (points >= 6) {
            return "D";
        } else if (points >= 4) {
            return "E";
        } else {
            return "U";
        }
    }
}
