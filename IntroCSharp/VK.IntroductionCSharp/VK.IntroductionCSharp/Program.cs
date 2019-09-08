using System;


namespace VK.IntroductionCSharp
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter your name");
            string fname = Console.ReadLine();

            Console.WriteLine("Please enter your last name");
            string lname = Console.ReadLine();
       
            Console.WriteLine("Hi, {0} {1}", fname, lname);

            Console.ReadLine();
        }
    }
}
