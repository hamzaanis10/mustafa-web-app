"use client"
import React, { ChangeEvent, useState } from "react";
import './page.css';
import AppCategories from "@/app/((withsidebar))/cmp/c.layout/menu.category/menu.catrgory";
import AppButton from "@/components/common/app.button/app.button";
import { Rating } from "primereact/rating";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Tag } from "primereact/tag";
import { useRouter } from "next/navigation";


function Page() {
    const [uploadedImage, setUploadedImage] = useState<string[]>([]);
    const router = useRouter()

    const routerChange = ()=>{
         router.push('/')
    }

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        const readers = files.map(file => {
            const reader = new FileReader();
            return new Promise((resolve) => {
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(file);
            });
        });

        Promise.all(readers).then(images => {
            setUploadedImage((prevImages) => [...prevImages, ...images as string[]]);
        });
    };

    const removeImage = (index: any) => {
        setUploadedImage(prevImages => prevImages.filter((_, i) => i !== index));
    };
    
    return (
        <div id="Review" className="flex" style={{ backgroundColor: "#F5F5F5" }}>
            <div className="hidden lg:flex lg:w-3 lg:relative z-2 menu-container">
                <AppCategories />
            </div>


            <div className="pt-4 m-auto flex flex-column align-items-center">
                <div className="flex align-items-center pb-4">
                    <i className="pi pi-angle-left text-5xl text-900 cursor-pointer mr-4" />
                    <span className="text-4xl font-semibold"> Review </span>
                </div>

                <div className="card bg-white container p-3">
                    <div className="flex align-items-center" style={{ marginBottom: "20px" }}>
                        <img src="https://primefaces.org/cdn/primereact/images/product/bracelet.jpg" alt="" 
                            width={70} height={70} style={{ borderRadius: "5px", marginRight: "10px" }} />
                        <div className="flex flex-column gap-3 ">
                            <span className="text-base font-semibold" style={{ color: "#000000" }}>
                                Driscoll’s Blueberries Driscoll’s Blueberries...
                            </span>
                            <span className="text-sm font-normal" style={{ color: "#9D9D9D" }}>
                                125g | Morocco Valley
                            </span>
                        </div>
                    </div>
                    <div style={{ lineHeight: "25px", marginBottom: "15px" }}>
                        <span className="text-sm font-medium" style={{ color: "#7B7B7B" }}>
                            Value of product
                        </span>
                        <Rating stars={5} value={5} cancel={false} />
                    </div>
                    <div style={{ lineHeight: "25px", marginBottom: "20px" }}>
                        <span className="text-sm font-medium" style={{ color: "#7B7B7B" }}>
                            Quality of product
                        </span>
                        <Rating stars={5} value={5} cancel={false} />
                    </div>

                    <div className="flex flex-column gap-4">
                        <InputText type="text" placeholder="Title" className="w-full" style={{ borderRadius: "8px" }} />
                        <InputTextarea placeholder="Review" rows={5} cols={30} className="w-full" style={{ borderRadius: "8px" }} />
                        <div className=' py-2 cursor-pointer uploadImgBox'>
                            <div className="flex w-full gap-2" >
                               {uploadedImage.map((image, index) => (
                                        <div key={index} className="uploadBox" style={{border: uploadedImage.length === 0 ? "1px solid #C4C4C4" : "none", padding:uploadedImage.length === 0 ? '10px' : "0px"}} >
                                            <img src={image} alt="Uploaded" style={{ width: '70px', height: '70px', borderRadius: '8px' }} />
                                            <button onClick={() => removeImage(index)} style={{ position: 'absolute', top: 0, right: 0, background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>X</button>
                                        </div>
                               ))}
                              <div className="uploadBox" style={{ width: uploadedImage.length === 0 ? '100%' : '70px', height:uploadedImage.length === 0 ? 'auto' : '70px' }} >
                                <input type="file" onChange={handleImageUpload} style={{ width: uploadedImage.length === 0 ? '100%' : '70px', height: uploadedImage.length === 0 ? '70px' : 'auto' }} />
                                <div className="info "  style={{ display: uploadedImage.length === 0 ? "flex" : "", flexDirection: uploadedImage.length === 0 ? "row" : undefined, gap: uploadedImage.length === 0 ? "4px" : ""}}>
                                    <i className="pi pi-plus text-md" style={{ color: "#00CB56", background: "#E6FFED", borderRadius: "50%", padding: "2px 4px" }}></i>
                                    {uploadedImage.length === 0 ? <span style={{ fontSize: '10px', color: "#00CB56" }}>Add Picture</span> :  null}
                                </div>
                              </div>
                            </div>
                        </div>
                       
                        <div>
                            <span className="text-sm" style={{ color: "#7B7B7B" }}>Keywords</span>
                            <div className="flex gap-3 mt-3">
                                <Tag value="String" className="bg-transparent" style={{ border: "1px solid #C4C4C4", borderRadius: "28px", padding: "4px 12px", color: "#555555" }} />
                                <Tag value="Fair" className="bg-transparent" style={{ border: "1px solid #C4C4C4", borderRadius: "28px", padding: "4px 12px", color: "#555555" }} />
                                <Tag value="Totally worth it" className="bg-transparent" style={{ border: "1px solid #C4C4C4", borderRadius: "28px", padding: "4px 12px", color: "#555555" }} />
                                <Tag value="Oily" className="bg-transparent" style={{ border: "1px solid #C4C4C4", borderRadius: "28px", padding: "4px 12px", color: "#555555" }} />
                                <Tag value="Description1" style={{ border: "1px solid #C4C4C4", borderRadius: "28px", padding: "4px 12px", color: "#fff", background: "#00CB56 !important" }} />
                                <Tag value="Description2" style={{ border: "1px solid #C4C4C4", borderRadius: "28px", padding: "4px 12px", color: "#fff", background: "#00CB56 !important" }} />
                                <Tag value="Skin Care" className="bg-transparent" style={{ border: "1px solid #C4C4C4", borderRadius: "28px", padding: "4px 12px", color: "#555555" }} />
                                <Tag value="Love it" className="bg-transparent" style={{ border: "1px solid #C4C4C4", borderRadius: "28px", padding: "4px 12px", color: "#555555" }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="w-15rem mt-4">
                        <AppButton label='Cancel' style={{ backgroundColor: "transparent", color: '#00CB56' }} />
                    </div>
                    <div className="w-15rem mt-4">
                        <AppButton label='Post' onClick={routerChange} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
