#include <bits/stdc++.h>
using namespace std;
void triangle (int n){
  for(int i=0;i<n;i++){
    for(char ch='E'-i;ch<='E';ch++){
      cout<<ch<<" ";
    }
    cout<<"\n";
  }
}
int main(){
  triangle(3);
}