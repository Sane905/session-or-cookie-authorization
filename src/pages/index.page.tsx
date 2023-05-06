import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { NextPage } from 'next';
import { Header } from '@/components/Header/Header';
import { pagesPath } from '@/lib/$path';
import router from 'next/router';
import { useCallback } from 'react';

const Page: NextPage = () => {
	return (
		<>
			<Header />
		</>
	);
};

export default Page;
