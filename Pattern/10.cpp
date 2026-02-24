#include <bits/stdc++.h>
using namespace std;
void triangle(int n)
{
for(int i = 1;i<=2*n-1;i++){
  int str=i;
  if(i>n) str=2*n-i;
  for(int j=1;j<=str;j++){
    cout << "*";
  }
  cout<<"\n";
}
}
  int main()
{
  triangle(3);
}