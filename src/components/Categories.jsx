import { CategoryCard } from './CategoryCard'
import { BsVectorPen } from 'react-icons/bs'
import { TiHtml5 } from 'react-icons/ti'
import { TbMicrophone2 , TbMusic } from 'react-icons/tb'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { WiSunrise } from 'react-icons/wi'
import { AiOutlineCamera } from 'react-icons/ai'
import { BiData } from 'react-icons/bi'
import { MdAttachMoney } from 'react-icons/md'
import { FaUniversity } from 'react-icons/fa'

export const Categories = () => {
    return ( <>
        <section className="w-full py-24 bg-[#f0fbf7]">
            <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
                <div className="text-center lg:text-start flex flex-col gap-4 mb-6">
                    <h1 className="text-[40px] leading-loose text-[#06241B] font-semibold font-public">Most <span
                        className="text-[#20B486]"> Popular Categories</span></h1>
                    <p className="text-[#6D737A] text-xl">Various versions have evolved over the years, sometimes by
                        accident,
                    </p>
                </div>
                <div className='grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1 w-full'>
                    <CategoryCard icons={ <BsVectorPen size={ 30 }/> } title={ 'Design' }/>
                    <CategoryCard icons={ <TiHtml5 size={ 30 }/> } title={ 'Development' }/>
                    <CategoryCard icons={ <TbMicrophone2 size={ 30 }/> } title={ 'Marketing' }/>
                    <CategoryCard icons={ <HiOutlineBriefcase size={ 30 }/> } title={ 'Business' }/>

                    <CategoryCard icons={ <WiSunrise size={ 30 }/> } title={ 'Lifestyle' }/>
                    <CategoryCard icons={ <AiOutlineCamera size={ 30 }/> } title={ 'Photography' }/>
                    <CategoryCard icons={ <TbMusic size={ 30 }/> } title={ 'Music' }/>
                    <CategoryCard icons={ <BiData size={ 30 }/> } title={ 'Data Science' }/>

                    <CategoryCard icons={ <TiHtml5 size={ 30 }/> } title={ 'Personal Develop' }/>
                    <CategoryCard icons={ <TiHtml5 size={ 30 }/> } title={ 'Health & Fitness' }/>
                    <CategoryCard icons={ <MdAttachMoney size={ 30 }/> } title={ 'Finance' }/>
                    <CategoryCard icons={ <FaUniversity size={ 30 }/> } title={ 'Teaching' }/>

                </div>
            </div>
        </section>
    </> )
}