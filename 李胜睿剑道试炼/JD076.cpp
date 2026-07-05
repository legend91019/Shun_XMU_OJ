#include<iostream>
using namespace std;

#include<string>

#include<cstring>
int main()
{
    string str,substr;
    getline(cin,str);
    getline(cin,substr);
    char max='A' ;
    int m=0,n=substr.length();
    int len=str.length();
    for(int i=0;str[i]!='\0';i++)
    {
        if(str[i]>max)
        {
            max=str[i];
            m=i;
        }
    } \
    str.resize(len+n); 
    //insert(max+1,substr);

    for(int i=len;i>m;i--)
    {
        str[i+n]=str[i];
    }
    for(int i=m+1,j=0;substr[j]!='\0';i++,j++)
    {
        str[i]=substr[j];
    }
    cout<<str;
}
