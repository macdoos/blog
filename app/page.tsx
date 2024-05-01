import Link from "next/link";
import Image from "next/image";
import avatar from "../public/avatar.jpg";
import macdoos_ar from "../public/macdoos-ar.svg";
import { Button } from "@/components/ui/button";

export const revalidate = 60;

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <section className="flex flex-col items-center justify-center p-4 w-full">
        <figure className="flex flex-col-reverse items-center justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Image
            alt="Person raising hand emoji"
            src={avatar}
            width={70}
            height={70}
            priority
            className="rounded-3xl border border-gray-500 border-opacity-20 shadow-inner"
          />
        </figure>
        <figcaption className="flex flex-col items-center justify-center font-bold">
          <MacdoosAR className="w-20 h-20" />
          <p className="text-lg" lang="en">
            macdoos
          </p>
        </figcaption>
        <div className="flex flex-col items-center justify-center m-7 w-full text-xs">
          <p className="flex items-center justify-center gap-1 opacity-70 mb-2">
            <span>Hacker larping as SWE</span>
          </p>
          <Link href="/blog" passHref>
            <Button variant="ghost">Blog</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function MacdoosAR(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="529.16663mm"
      height="529.16663mm"
      viewBox="0 0 529.16662 529.16662"
      {...props}
    >
      <g transform="translate(-18231.183,-514.35004)">
        <g transform="matrix(1.7434622,0,0,1.7434622,17269.655,-579.10836)" style={{ fill: "currentColor", fillOpacity: 1 }}>
          <path
            d="m 674.01653,782.50102 c -2.71545,10.13349 3.29818,20.54958 13.43172,23.26483 0.68318,0.17132 1.37535,0.30451 2.07332,0.39895 l -3.93887,11.16811 14.51595,5.26378 10.18049,-28.86028 c 0.1273,-0.36088 0.28962,-0.93503 0.43393,-1.40228 2.71545,-10.13348 -3.29817,-20.54958 -13.43171,-23.26483 -9.33438,-2.50089 -20.35874,2.58648 -23.26483,13.43172 z m 19.26815,1.48319 c 1.89606,0.50821 3.0213,2.45708 2.51349,4.35325 -0.50782,1.89642 -2.45681,3.02212 -4.35325,2.51437 -1.8965,-0.50821 -3.02186,-2.45769 -2.51348,-4.35414 0.54038,-2.01762 2.59361,-2.98576 4.35324,-2.51348 z"
            style={{ fill: "currentColor", fillOpacity: 1, strokeWidth: "0.109447", strokeLinecap: "round", paintOrder: "fill markers stroke" }}
          />
          <path
            d="m 790.47346,735.27097 -44.16764,21.13459 6.57462,14.05298 c 1.7428,-1.09047 3.93427,-1.97107 6.49845,-2.01138 6.59512,-1.4e-4 11.94156,5.34631 11.94142,11.94141 1.4e-4,6.59468 -5.34583,11.94099 -11.94053,11.94141 -4.7355,-0.014 -9.48631,-3.04643 -10.94283,-7.16757 l -7.76186,-22.00275 -14.51596,5.2629 5.69061,16.13341 -19.28357,9.22727 6.54336,13.98658 19.64517,-9.40096 c 5.19438,5.9657 12.7149,9.39356 20.62508,9.40096 h 3.84284 c 11.30401,-0.018 22.33665,-3.46462 31.64143,-9.8835 1.18434,1.85284 2.68128,3.48598 4.42438,4.8266 8.36306,6.33398 20.27765,4.68897 26.61149,-3.67419 6.3335,-8.36264 4.68886,-20.27623 -3.6733,-26.61031 v -8.9e-4 c -8.36306,-6.33398 -20.27734,-4.68897 -26.6112,3.67419 -0.6793,0.94418 -3.89082,5.18712 -9.25601,8.92375 0.2654,-1.5316 0.39978,-3.08307 0.40192,-4.63749 -0.002,-8.29206 -3.76226,-16.13631 -10.22466,-21.332 l 20.48043,-9.79991 z m 20.28392,48.75592 c 1.95649,7e-5 3.54252,1.5861 3.54258,3.54259 1.1e-4,1.95661 -1.58597,3.54282 -3.54258,3.54289 -1.95673,1.1e-4 -3.543,-1.58616 -3.54289,-3.54289 6e-5,-1.95661 1.58628,-3.5427 3.54289,-3.54259 z"
            style={{ fill: "currentColor", fillOpacity: 1, strokeWidth: "0.951624", paintOrder: "fill markers stroke" }}
          />
          <path
            d="m 595.97903,769.11374 c -11.41611,3.57104 -19.19299,14.13913 -19.2071,26.10072 -3.3e-4,15.12297 12.25933,27.38264 27.3823,27.38232 15.06904,-0.002 27.30456,-12.1791 27.37818,-27.24796 3.93175,1.73881 8.17881,2.65134 12.47779,2.68098 1.95497,-0.0208 3.90371,-0.22429 5.82082,-0.60772 l -1.06142,3.01068 14.5159,5.26376 8.89042,-25.2057 -14.72234,-5.33806 c -2.91323,4.61629 -7.98549,7.42148 -13.44414,7.4352 -5.26134,-0.007 -10.18066,-2.60852 -13.14751,-6.95358 l -14.69988,5.3299 0.014,0.0238 h -0.0816 v 14.22548 c 8e-5,6.59509 -5.34631,11.94148 -11.9414,11.9414 -6.59508,7e-5 -11.94146,-5.34632 -11.94138,-11.9414 -7e-5,-6.59507 5.34631,-11.94145 11.94138,-11.94138 z"
            style={{ fill: "currentColor", fillOpacity: 1, strokeWidth: "0.792502", paintOrder: "fill markers stroke" }}
          />
        </g>
      </g>
    </svg>
  );
}