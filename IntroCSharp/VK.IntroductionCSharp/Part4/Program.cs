using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Part4
{
    class Program
    {
        static void Main(string[] args)
        {
        // string data types, escape sequences, verbatim literal
        https://www.youtube.com/watch?v=5g3TTPaGVzE&list=PLAC325451207E3105&index=4

            string name = "\"Pragim\"";
            Console.WriteLine(name);

            // Using escape sequences
            string path1 = "C:\\Pragim\\DotNet\\CSharp";
            
            // Using Verbatim Literal character @
            string path2 = @"C:\Pragim\DotNet\CSharp";

            Console.WriteLine(path1);
            Console.WriteLine(path2);



            Console.Read();

        }
    }
}
