import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const capitalizeFirstLetter = (str: string): string => {
  let strArr = str.split(',')

  if(strArr.length === 1) return str.charAt(0).toUpperCase() + str.slice(1)

  let resultStr = ''

  strArr.forEach((element, index )=> {
    const ele = element.replace(/^\s+/g, '');

    resultStr += (ele.charAt(0).toUpperCase() + ele.slice(1))
    if(index + 1 !== strArr.length) resultStr += ', '
  });

  return resultStr
}