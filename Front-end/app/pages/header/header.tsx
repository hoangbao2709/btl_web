import logoDark from "./../images/logo.webp";
import "./style.css";

let category = [
    "Tất cả sản phẩm",
    "Lịch sử truyền thống",
    "Văn học Việt Nam",
    "Văn học nước ngoài",
    "Kiến thức, khoa học",
    "Truyện tranh",
    "Wings Books"
];

let linkCategory = [
    "http://localhost:5173/",
    "https://nxbkimdong.com.vn/collections/lich-su-truyen-thong",
    "https://nxbkimdong.com.vn/collections/van-hoc-viet-nam",
    "https://nxbkimdong.com.vn/collections/van-hoc-nuoc-ngoai",
    "https://nxbkimdong.com.vn/collections/van-hoc-nuoc-ngoai",
    "https://nxbkimdong.com.vn/collections/kien-thuc-khoa-hoc",
    "https://nxbkimdong.com.vn/collections/truyen-tranh",
    "https://nxbkimdong.com.vn/collections/wings"
];

let menu = [
    "Home",
    "Shop",
    "Our Story",
    "Blog",
    "Contact Us"
];

let linkMenu = [
    "http://localhost:5173/",
    "https://nxbkimdong.com.vn/collections/lich-su-truyen-thong",
    "https://nxbkimdong.com.vn/collections/van-hoc-viet-nam",
    "https://nxbkimdong.com.vn/collections/van-hoc-nuoc-ngoai",
    "https://nxbkimdong.com.vn/collections/van-hoc-nuoc-ngoai",
    "https://nxbkimdong.com.vn/collections/kien-thuc-khoa-hoc",
    "https://nxbkimdong.com.vn/collections/truyen-tranh",
    "https://nxbkimdong.com.vn/collections/wings"
];

const listCategory = category.map((element, index) => {
    if (index !== category.length - 1) {
        return (
            <li key={index} className="border-b border-black pt-[5px] pb-[5px] bg-[#FFFAEC] hover:bg-[#F5ECD5] hover:text-[red]">
                <a className="pl-[30px] pr-[30px]" href={linkCategory[index]}>{element}</a>
            </li>
        );
    } else {
        return (
            <li key={index} className="rounded-b-lg border-b border-black pt-[5px] pb-[5px] bg-[#FFFAEC] hover:bg-[#F5ECD5] hover:text-[red]">
                <a className="pl-[30px] pr-[30px]" href={linkCategory[index]}>{element}</a>
            </li>
        );
    }
});

const listMenu = menu.map((element, index) => {
    return (
        <li className="pr-[15px] pl-[15px] pt-[10px] pb-[10px] ml-[5px] mr-[5px] rounded-lg hover:bg-[#493D9E] hover:text-[white] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
            <a href="">{element}</a>
        </li>
    );
});


export function Header() {
    return (
        <header className="h-[110px] pl-[100px] items-center flex relative bg-[#E0E3E7]">
            <div className="logo flex items-center ">
                <img src={logoDark} className="size-[80px] mr-[50px]" alt="" />
            </div>
            <ul className="flex items-center text-[150%] absolute left-[13%]">
                <li className="pr-[30px] danhmuc absolute pb-[37px] pt-[37px]">
                    <i className="fa-solid fa-list"></i>
                    <ul className="category w-[260px] rounded-b-lg text-[20px] ">
                        {listCategory}
                    </ul>
                </li>
                {listMenu}
            </ul>
            <ul className="right-[25%] absolute flex">
                <input type="text" className="border-2 border-solid rounded-[10px] w-[300px] pl-[20px] text-[20px] mr-[50px]" placeholder="Tìm kiếm sản phẩm" />
                <li className="text-[30px] pr-[50px]"><i className="fa-solid fa-magnifying-glass"></i></li>
                <li className="text-[30px] pr-[50px]"><i className="fa-regular fa-heart"></i></li>
                <li className="text-[30px]"><i className="fa-solid fa-bag-shopping"></i></li>
            </ul>
            <a href="#" className="p-[30px] pt-[10px] pb-[10px] bg-[black] text-[white] text-[30px] right-[3%] absolute rounded-[8px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">Đăng Nhập</a>
            <a href="" className="p-[30px] pt-[10px] pb-[10px] text-[black] text-[30px] right-[15%] absolute rounded-[8px] transition delay-150 duration-300 ease-in-out hover:text-[white] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">Đăng ký</a>
        </header>
    );
}
