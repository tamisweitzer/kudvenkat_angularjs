using System;


namespace Part3
{
    class Program
    {
        static void Main(string[] args)
        {
            // https://www.youtube.com/watch?v=y3k5d6xub-E&list=PLAC325451207E3105&index=3

            //Data Types

            // Booleans
            bool t = true;
            bool f = false;
            if (t == f)
            { Console.WriteLine("t and f are equal"); }
            else
            { Console.WriteLine("t and f are not equal"); }

            // Numbers
            Console.WriteLine("Min value of int = {0}", int.MinValue);
            Console.WriteLine("Max value of int = {0}", int.MaxValue);

            Console.WriteLine("Min value of float = {0}", float.MinValue);
            Console.WriteLine("Max value of float = {0}", float.MaxValue);

            Console.WriteLine("Min value of decimal = {0}", decimal.MinValue);
            Console.WriteLine("Max value of decimal = {0}", decimal.MaxValue);

            Console.WriteLine("Min value of double = {0}", double.MinValue);
            Console.WriteLine("Max value of double = {0}", double.MaxValue);







            Console.Read();

        }
    }
}
