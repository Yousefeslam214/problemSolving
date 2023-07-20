#include <iostream>
#include <string>
#include <fstream> // contains file stream processing types
#include <cstdlib> // exit function prototype
using namespace std;


struct stInfo {
	string firstName;
	string secondName;

};


stInfo askUser() {
	stInfo info;

	cout << "enter first name";
	cin >> info.firstName ;
	cout << "enter second name";
	cin >> info.secondName;
	return info;
}
string connect(stInfo info) {
	string fullName;
	fullName = info.firstName + " " + info.secondName;
	return fullName;
}
void printFullName(string fullName) {
	cout << fullName;
}




int main() {
	

	printFullName(connect(askUser()));


}