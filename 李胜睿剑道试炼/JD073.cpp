#include<iostream>
using namespace std;//数字不加密！

#include<string>
int main()
{
    string a;
    getline(cin,a);
    for(int i=0;a[i]!='\0';i++)
    {
        if(a[i]>='a'&&a[i]<='y'||a[i]>='A'&&a[i]<='Y')
            a[i]+=1;
        else if(a[i]=='Z')a[i]='A';
        else if(a[i]=='z')a[i]='a';
        //else if(a[i]=='9')a[i]='0';

    }
    cout<<a<<endl;
    return 0;
}