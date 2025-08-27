#include <bits/stdc++.h>
using namespace std;
void triangle(int n)
{
int str =1;
for(int i=0;i<n;i++){
  if(i% 2==0) str=1;
  else str =0;
  for(int j =0;j<=i;j++){
    cout << str;
    str=1-str;
  }
  cout<<"\n";  

}
}
 int main()
{
  triangle(3);
}