import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const PasswordInput = ({ value, onChange, placeholder }) => {
	const [isShowpassword, setIsShowPassword] = useState(false);

	const toffleShowPassword = () => {
		setIsShowPassword(!isShowpassword);
	};
	return (
		<div className="flex items-center bg-transparent border-[1.5px] rounded mb-3">
			<input
				value={value}
				onChange={onChange}
				type={isShowpassword ? 'text' : 'password'}
				placeholder={placeholder || 'password'}
				className="w-full text-sm bg-transparent px-5 py-3 mr-3 rounded outline-none"
			/>

			{isShowpassword ? (
				<FaRegEye
					size={22}
					className="text-newColor cursor-pointer"
					onClick={() => toffleShowPassword()}
				/>
			) : (
				<FaRegEyeSlash
					size={22}
					className="text-slate-400 cursor-pointer"
					onClick={() => toffleShowPassword()}
				/>
			)}
		</div>
	);
};
export default PasswordInput;
